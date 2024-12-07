import WallabagPlugin from 'main';

export interface Token {
  clientId: string;
  clientSecret: string;
  accessToken: string;
  refreshToken: string;
}

const tokenVaultPath = (plugin: WallabagPlugin) => `${plugin.manifest.dir}/.__wallabag_token__`;

export const storeTokenToVault = async (plugin: WallabagPlugin, token: Token): Promise<void> => {
  return plugin.app.vault.adapter.write(tokenVaultPath(plugin), JSON.stringify(token));
};

export const loadTokenFromVault = async (plugin: WallabagPlugin): Promise<Token | undefined> => {
  const path = tokenVaultPath(plugin);
  console.log('Attempting to load token from path:', path);
  return plugin.app.vault.adapter.exists(path).then(async (exists) => {
    console.log('Token file exists:', exists);
    if (!exists) {
      console.log('Token file not found');
      return undefined;
    } else {
      const tokenContent = await plugin.app.vault.adapter.read(path);
      console.log('Token loaded:', tokenContent);
      return JSON.parse(tokenContent);
    }
  });
};

export const removeTokenFromVault = async (plugin: WallabagPlugin): Promise<void> => {
  const path = tokenVaultPath(plugin);
  return plugin.app.vault.adapter.remove(path);
};
