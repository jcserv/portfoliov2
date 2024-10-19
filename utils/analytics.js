import simpleAnalyticsPlugin from "@analytics/simple-analytics";
import Analytics from "analytics";

const analytics = Analytics({
  app: "jarrodservilla.com",
  plugins: [simpleAnalyticsPlugin()],
});

function trackEvent(eventId) {
  analytics.track(eventId);
}

export default trackEvent;
