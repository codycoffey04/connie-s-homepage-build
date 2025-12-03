declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackPhoneClick = (agentName: string, phoneNumber: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'engagement',
      event_label: `${agentName} - ${phoneNumber}`,
      agent_name: agentName,
      phone_number: phoneNumber
    });
  }
};

export const trackSmsClick = (agentName: string, phoneNumber: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'sms_click', {
      event_category: 'engagement',
      event_label: `${agentName} - ${phoneNumber}`,
      agent_name: agentName,
      phone_number: phoneNumber
    });
  }
};
