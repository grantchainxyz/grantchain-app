export function useGrantWallet() {
  return {
    connect: () => console.log("🔌 Connected to Grant Wallet"),
    disconnect: () => console.log("❌ Disconnected"),
    publicKey: "GrantUserPublicKey"
  };
}
