/** Webpack resolves these to `@wagmi/connectors` implementation files (see next.config.ts). */
declare module "@flood-wagmi/baseAccount" {
  export { baseAccount } from "@wagmi/connectors";
}

declare module "@flood-wagmi/walletConnect" {
  export { walletConnect } from "@wagmi/connectors";
}
