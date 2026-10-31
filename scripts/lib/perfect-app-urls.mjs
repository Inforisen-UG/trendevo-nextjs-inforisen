export function getPerfectAppBaseUrl() {
  return (
    process.env.NEXT_PUBLIC_PERFECT_APP_URL?.trim().replace(/\/$/, '') ||
    'https://my.trendevo.com'
  );
}

export function getSignUpUrl() {
  return `${getPerfectAppBaseUrl()}/signup`;
}

export function getSignInUrl() {
  return getPerfectAppBaseUrl();
}
