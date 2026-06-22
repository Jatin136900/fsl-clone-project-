import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { AuthShell, Field, Input, PasswordInput, PrimaryButton } from "@/components/AuthShell";
import { SearchableSelect } from "@/components/SearchableSelect";
import { EUROPEAN_LOCATIONS } from "@/data/locations";
import { useAuth } from "@/context/AuthContext";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/company/register")({
  head: () => ({
    meta: [
      { title: "Company Registration · WorkInEurope" },
      { name: "description", content: "Hire verified global talent. Create your company profile on WorkInEurope." },
    ],
  }),
  component: CompanyRegister,
});

const sizeOptions = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "500+", label: "500+ employees" },
];

const industryOptions = [
  { value: "Technology", label: "Technology" },
  { value: "Healthcare", label: "Healthcare & Life Sciences" },
  { value: "Finance", label: "Finance & Fintech" },
  { value: "Engineering", label: "Engineering & Manufacturing" },
  { value: "Hospitality", label: "Hospitality & Tourism" },
  { value: "Logistics", label: "Logistics & Transport" },
  { value: "Construction", label: "Construction & Real Estate" },
  { value: "Other", label: "Other Industry" },
];

function CompanyRegister() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  // Form State
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState("");

  // Dynamic Cities
  const [cityOptions, setCityOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    if (user && user.role === "company") {
      navigate({ to: "/employers/dashboard" });
    }
  }, [user, navigate]);

  // Update cities when country changes
  useEffect(() => {
    const selectedCountryData = EUROPEAN_LOCATIONS.find((c) => c.name === country);
    if (selectedCountryData) {
      setCityOptions(selectedCountryData.cities.map((city) => ({ value: city, label: city })));
    } else {
      setCityOptions([]);
    }
    setCity(""); // Reset selected city
  }, [country]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccess("");

    const newErrors: Record<string, string> = {};

    // Validation
    if (!companyName.trim()) newErrors.companyName = "Company name is required.";
    if (!email.trim()) {
      newErrors.email = "Business email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (!website.trim()) {
      newErrors.website = "Website is required.";
    } else if (!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(website)) {
      newErrors.website = "Please enter a valid URL.";
    }
    if (!industry) newErrors.industry = "Industry is required.";
    if (!companySize) newErrors.companySize = "Company size is required.";
    if (!country) newErrors.country = "Country is required.";
    if (!city) newErrors.city = "City is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simulate Registration
    setTimeout(() => {
      setLoading(false);
      setSuccess("Company workspace successfully created!");

      // Log the company in
      login("company", "Marcus Hollander", email, {
        companyName,
        website,
        industry,
        companySize,
        country,
        city,
      });

      // Redirect to employer dashboard
      setTimeout(() => {
        navigate({ to: "/employers/dashboard" });
      }, 500);
    }, 1000);
  };

  const countryOptions = EUROPEAN_LOCATIONS.map((c) => ({
    value: c.name,
    label: c.name,
    flag: c.flag,
  }));

  return (
    <AuthShell
      side="employer"
      title="Create your company account"
      subtitle="Post unlimited roles and search video-verified talent in Europe."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/company/login" className="font-medium text-foreground underline underline-offset-4">
            Sign in
          </Link>
        </>
      }
    >
      <div className="grid grid-cols-3 gap-2 mb-6">
        {["Unlimited jobs", "AI matching", "Video screening"].map((p) => (
          <div key={p} className="flex items-center gap-1.5 text-xs px-2.5 py-2 rounded-lg bg-secondary/50 border border-border/10">
            <CheckCircle2 className="h-3 w-3 text-success shrink-0" />
            <span className="truncate text-muted-foreground font-medium">{p}</span>
          </div>
        ))}
      </div>

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
            <Field label="Company Name">
              <Input
                required
                placeholder="Berlin Robotics GmbH"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                disabled={loading}
                className={errors.companyName ? "border-destructive/50" : ""}
              />
              {errors.companyName && <div className="mt-1 text-xs text-destructive">{errors.companyName}</div>}
            </Field>
          </div>

          <Field label="Business Email">
            <Input
              required
              type="email"
              placeholder="hr@berlin-robotics.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className={errors.email ? "border-destructive/50" : ""}
            />
            {errors.email && <div className="mt-1 text-xs text-destructive">{errors.email}</div>}
          </Field>

          <Field label="Company Website">
            <Input
              required
              placeholder="https://berlin-robotics.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              disabled={loading}
              className={errors.website ? "border-destructive/50" : ""}
            />
            {errors.website && <div className="mt-1 text-xs text-destructive">{errors.website}</div>}
          </Field>

          <Field label="Industry">
            <SearchableSelect
              options={industryOptions}
              value={industry}
              onChange={setIndustry}
              placeholder="Select industry"
              disabled={loading}
              error={errors.industry}
            />
          </Field>

          <Field label="Company Size">
            <SearchableSelect
              options={sizeOptions}
              value={companySize}
              onChange={setCompanySize}
              placeholder="Select company size"
              disabled={loading}
              error={errors.companySize}
            />
          </Field>

          <Field label="Country">
            <SearchableSelect
              options={countryOptions}
              value={country}
              onChange={setCountry}
              placeholder="Search country"
              disabled={loading}
              error={errors.country}
            />
          </Field>

          <Field label="City">
            <SearchableSelect
              options={cityOptions}
              value={city}
              onChange={setCity}
              placeholder={country ? "Search city" : "Select country first"}
              disabled={loading || !country}
              error={errors.city}
            />
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
        </div>

        <PrimaryButton disabled={loading}>
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              Creating workspace…
            </span>
          ) : (
            "Create company workspace"
          )}
        </PrimaryButton>

        <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-2">
          <ShieldCheck className="h-3.5 w-3.5 text-success font-semibold" />
          Workspace security is active.
        </div>
      </form>
    </AuthShell>
  );
}
