export const gtmEvent = (eventData: { event: string; [key: string]: any }) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(eventData);
  }
};