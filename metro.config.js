/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
//  const localPackagePaths = [
//   `D:\\scrtlabs\\secret.js`,
// ]

const packagePath =
    'd:\\scrtlabs\\secretjs';


module.exports = {
  resolver: {
    nodeModulesPaths: [packagePath, 'd:\\scrtlabs\\'], // update to resolver
    extraNodeModules: ['secretjs']
  },
  // watchFolders: [packagePath],  
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
  // watchFolders: [...localPackagePaths]
};
