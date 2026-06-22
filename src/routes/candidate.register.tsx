import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AuthShell, Field, Input, PasswordInput, PrimaryButton } from "@/components/AuthShell";
import { SearchableSelect } from "@/components/SearchableSelect";
import { ALL_COUNTRIES, EUROPEAN_LOCATIONS } from "@/data/locations";
import { useAuth } from "@/context/AuthContext";
import { ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/candidate/register")({
  head: () => ({
    meta: [
      { title: "Candidate Registration · WorkInEurope" },
      { name: "description", content: "Join WorkInEurope. Build your profile and get matched with European employers." },
    ],
  }),
  component: CandidateRegister,
});

const experienceOptions = [
  { value: "Entry Level", label: "Entry Level (0-2 years)" },
  { value: "Mid-Level", label: "Mid-Level (2-5 years)" },
  { value: "Senior", label: "Senior (5-8 years)" },
  { value: "Lead/Executive", label: "Lead / Executive (8+ years)" },
];

function CandidateRegister() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");
  const [preferredCountry, setPreferredCountry] = useState("");
  const [preferredCity, setPreferredCity] = useState("");
  const [skills, setSkills] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState("");

  // Dynamic Cities
  const [cityOptions, setCityOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    if (user && user.role === "candidate") {
      navigate({ to: "/candidates/dashboard" });
    }
  }, [user, navigate]);

  // Update cities when preferred country changes
  useEffect(() => {
    const selectedCountryData = EUROPEAN_LOCATIONS.find((c) => c.name === preferredCountry);
    if (selectedCountryData) {
      setCityOptions(selectedCountryData.cities.map((city) => ({ value: city, label: city })));
    } else {
      setCityOptions([]);
    }
    setPreferredCity(""); // Reset selected city
  }, [preferredCountry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");

    const newErrors: Record<string, string> = {};

    // Validation
    if (!fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (!phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";
    if (!currentCountry) newErrors.currentCountry = "Current country is required.";
    if (!preferredCountry) newErrors.preferredCountry = "Preferred EU country is required.";
    if (!preferredCity) newErrors.preferredCity = "Preferred EU city is required.";
    if (!skills.trim()) newErrors.skills = "Skills are required.";
    if (!experienceLevel) newErrors.experienceLevel = "Experience level is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simulate Registration
    setTimeout(() => {
      setLoading(false);
      setSuccess("Account successfully created!");

      // Log the candidate in
      login("candidate", fullName, email, {
        phoneNumber,
        currentCountry,
        preferredCountry,
        preferredCity,
        skills,
        experienceLevel,
      });

      // Redirect to candidate dashboard
      setTimeout(() => {
        navigate({ to: "/candidates/dashboard" });
      }, 500);
    }, 1000);
  };

  const countryOptions = ALL_COUNTRIES.map((c) => ({
    value: c.name,
    label: c.name,
    flag: c.flag,
  }));

  const euCountryOptions = EUROPEAN_LOCATIONS.map((c) => ({
    value: c.name,
    label: c.name,
    flag: c.flag,
  }));

  return (
    <AuthShell
      title="Create your account"
      subtitle="Start your European career journey in under 2 minutes."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/candidate/login" className="font-medium text-foreground underline underline-offset-4">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(errors).length > 0 && (
          <div className="p-3.5 rounded-xl bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20 animate-in fade-in duration-200">
            Please correct the errors in the form below.
          </div>
        )}
        {success && (
          <div className="p-3.5 rounded-xl bg-success/10 text-success text-sm font-medium border border-success/20 animate-in fade-in duration-200">
            {success}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          <div className="col-span-2">
            <Field label="Full Name">
              <Input
                required
                placeholder="Priya Nadkarni"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
                className={errors.fullName ? "border-destructive/50" : ""}
              />
              {errors.fullName && <div className="mt-1 text-xs text-destructive">{errors.fullName}</div>}
            </Field>
          </div>

          <Field label="Email">
            <Input
              required
              type="email"
              placeholder="priya@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className={errors.email ? "border-destructive/50" : ""}
            />
            {errors.email && <div className="mt-1 text-xs text-destructive">{errors.email}</div>}
          </Field>

          <Field label="Phone Number">
            <Input
              required
              type="tel"
              placeholder="+91 98765 43210"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={loading}
              className={errors.phoneNumber ? "border-destructive/50" : ""}
            />
            {errors.phoneNumber && <div className="mt-1 text-xs text-destructive">{errors.phoneNumber}</div>}
          </Field>

          <div className="col-span-2">
            <Field label="Password" hint="8 characters minimum">
              <PasswordInput
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className={errors.password ? "border-destructive/50" : ""}
              />
              {errors.password && <div className="mt-1 text-xs text-destructive">{errors.password}</div>}
            </Field>
          </div>

          <Field label="Experience Level">
            <SearchableSelect
              options={experienceOptions}
              value={experienceLevel}
              onChange={setExperienceLevel}
              placeholder="Select experience level"
              disabled={loading}
              error={errors.experienceLevel}
            />
          </Field>

          <Field label="Current Country">
            <SearchableSelect
              options={countryOptions}
              value={currentCountry}
              onChange={setCurrentCountry}
              placeholder="Search current country"
              disabled={loading}
              error={errors.currentCountry}
            />
          </Field>

          <Field label="Preferred EU Country">
            <SearchableSelect
              options={euCountryOptions}
              value={preferredCountry}
              onChange={setPreferredCountry}
              placeholder="Search preferred EU country"
              disabled={loading}
              error={errors.preferredCountry}
            />
          </Field>

          <Field label="Preferred EU City">
            <SearchableSelect
              options={cityOptions}
              value={preferredCity}
              onChange={setPreferredCity}
              placeholder={preferredCountry ? "Search city" : "Select country first"}
              disabled={loading || !preferredCountry}
              error={errors.preferredCity}
            />
          </Field>

          <div className="col-span-2">
            <Field label="Skills" hint="Comma-separated skills">
              <Input
                required
                placeholder="React, Node.js, TypeScript, UI/UX"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                disabled={loading}
                className={errors.skills ? "border-destructive/50" : ""}
              />
              {errors.skills && <div className="mt-1 text-xs text-destructive">{errors.skills}</div>}
            </Field>
          </div>
        </div>

        <label className="flex items-start gap-2 text-sm text-muted-foreground mt-4 cursor-pointer select-none">
          <input type="checkbox" className="mt-1 rounded border-border text-foreground focus:ring-foreground/5" defaultChecked />
          <span>Send me job alerts and platform updates. No spam.</span>
        </label>

        <PrimaryButton disabled={loading}>
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              Creating profile…
            </span>
          ) : (
            "Create my profile"
          )}
        </PrimaryButton>

        <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-success font-semibold" />
          128-bit encrypted. Your details stay private.
        </div>

        <p className="text-xs text-muted-foreground text-center">
          By creating an account you agree to our{" "}
          <a className="underline cursor-pointer">Terms</a> and <a className="underline cursor-pointer">Privacy Policy</a>.
        </p>
      </form>
    </AuthShell>
  );
}
