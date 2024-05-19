import { FullscreenView, Layout, RegistrationForm, Typography } from "@/components";

export function Registration() {
  return (
    <Layout>
      <FullscreenView center className='gap-y-8 py-8'>
        <Typography element='h1' type='heading_2'>
          Event registration
        </Typography>
        <RegistrationForm />
      </FullscreenView>
    </Layout>
  );
}
