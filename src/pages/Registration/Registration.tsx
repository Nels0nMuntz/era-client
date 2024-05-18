import { Layout, RegistrationForm, Typography } from "@/components";

export function Registration() {
  return (
    <Layout>
      <div className='flex flex-col gap-y-8 py-8'>
        <Typography element='h1' type='heading_2'>
          Event registration
        </Typography>
        <RegistrationForm />
      </div>
    </Layout>
  );
}
