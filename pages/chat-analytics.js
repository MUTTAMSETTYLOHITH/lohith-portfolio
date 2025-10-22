export async function getServerSideProps() {
  return { redirect: { destination: "/chat-analytics-real-time", permanent: false } };
}
export default function ChatAnalytics(){ return null; }
