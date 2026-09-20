import { createRoot } from "react-dom/client";
import Header from './components/Header';
import OrderCard from "./components/OrderCard";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

function App() {

    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [type, setType] = useState('order_id');
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchOrders(){
            try{
            const response = await fetch("/api/orders");
            const data = await response.json();
            setOrders(data.orders);
            setFilteredOrders(data.orders);
            } catch(error){
                setError(error.message);
            } finally{
            setLoading(false);
            }
        }
        fetchOrders();
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const filteredOrders = orders.filter((order)=> {
            const value = String(order[type]).toLowerCase();
            const searchValue = search.toLowerCase().trim();

            return value.includes(searchValue);
        })

        setFilteredOrders(filteredOrders);
    }  
    return (
        <div className="min-h-screen">
            <Header />
            <main className="m-auto w-250">
                <h2 className="text-center mt-5 font-bold text-2xl">
                    SEARCH ORDER
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="rounded-full mt-5 bg-white text-black text-center p-3"
                >
                    <div className="border rounded-full p-3">
                        <div className="w-full flex items-center gap-3">
                            <div className="flex gap-2 items-center">
                                <span>Search By :</span>
                                <label className="flex gap-0.5">
                                    <input
                                        type="radio"
                                        name="type"
                                        value="order_id"
                                        checked={type === "order_id"}
                                        onChange={(e) =>
                                            setType(e.target.value)
                                        }
                                    />
                                    OrderId
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="type"
                                        value="customer_mobile"
                                        checked={type === "customer_mobile"}
                                        onChange={(e) =>
                                            setType(e.target.value)
                                        }
                                    />
                                    Mobile
                                </label>
                                <label className="flex gap-0.5">
                                    <input
                                        type="radio"
                                        name="type"
                                        value="customer_name"
                                        checked={type === "customer_name"}
                                        onChange={(e) =>
                                            setType(e.target.value)
                                        }
                                    />
                                    Name
                                </label>
                                <label className="flex gap-0.5">
                                    <input
                                        type="radio"
                                        name="type"
                                        value="customer_email"
                                        checked={type === "customer_email"}
                                        onChange={(e) =>
                                            setType(e.target.value)
                                        }
                                    />
                                    Email
                                </label>
                            </div>
                            <div className="bg-gray-300 flex flex-1 items-center rounded-full">
                                <input
                                    text="text"
                                    name="search"
                                    placeholder="Search..."
                                    className="flex flex-1 px-4 py-2 rounded-full outline-none"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <Search className="mr-4" size={20} />
                            </div>
                            <button
                                className="px-10 py-2 bg-linear-to-r text-white from-lime-400 via-lime-600 to-lime-800 rounded-full cursor-pointer"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                SEARCH ORDER
                            </button>
                        </div>
                    </div>
                </form>
                {
                    
                    loading && <p className="mt-5 text-center">Loading Orders...</p>
                }
                {
                    error && <p className="text-center mt-5">Error: {error}</p>
                }
                <div className="space-y-4">
                    {filteredOrders.length === 0 ? (
                        <p className="mt-5 text-center text-2xl text-white">
                            No orders found.
                        </p>
                    ) : (
                        filteredOrders.map((order) => (
                            <OrderCard key={order.order_id} order={order} />
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}

const root = createRoot(document.getElementById("app"));

root.render(<App />);