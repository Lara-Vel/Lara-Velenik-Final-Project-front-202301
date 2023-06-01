import { ReportHandler } from 'web-vitals';

const reportWebVitals = async (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    const webVitals = await import('web-vitals');
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals;
    try {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    } catch (error: any) {
      throw new Error('Error in reportWebVitals:' + error);
    }
  }
};

export default reportWebVitals;
