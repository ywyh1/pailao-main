import { RuntimeConfig } from 'zebras';

export const request: RuntimeConfig['request'] = () => {
  return {
    requestInterceptor(config) {
      // console.log('requestInterceptor', config);
      return config;
    },
    responseInterceptor(data) {
      // console.log('responseInterceptor', data);
      return data;
    },
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  };
};

export const onRouteChange: RuntimeConfig['onRouteChange'] = (props) => {
  console.log('route change', props);
};
