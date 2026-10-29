const userAgent = process.env.npm_config_user_agent ?? "";

if (!userAgent.startsWith("yarn/4.")) {
  console.error(
    "This repository requires Yarn 4. Enable Corepack, then run yarn install.",
  );
  process.exit(1);
}
