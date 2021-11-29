import { QueryClient, QueryClientProvider } from "react-query";
import AddPassenger from "./AddPassenger";
import Passengers from "./Passengers";
import PassengerID from "./PassengerID";

const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Passengers />
		<PassengerID/>
		<AddPassenger/>
      </QueryClientProvider>
    </div>
  );
}

export default App;