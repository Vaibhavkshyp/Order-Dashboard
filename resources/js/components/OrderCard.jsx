import ProductCard from "./ProductCard"
const OrderCard = ({order}) => {
  return (
      <div className="p-5 bg-white mt-3 rounded-2xl">
          <table className="w-full">
              <tr className="flex justify-between">
                  <td className="text-center">
                      <h4>Order Date</h4>
                      <h4>{order.order_date}</h4>
                  </td>
                  <td>
                      <h4>{order.order_id}</h4>
                      <h4 className="bg-amber-600 text-center">
                          {order.payment_method}
                      </h4>
                  </td>
                  <td className="font-semibold">
                      <h5>Buyer Details:</h5>
                      <ul>
                          <li>
                              Name:{" "}
                              <span className="font-normal">
                                  {order.customer_name}
                              </span>
                          </li>
                          <li>
                              State:{" "}
                              <span className="font-normal">
                                  {order.customer_state}
                              </span>
                          </li>
                          <li>
                              Email:{" "}
                              <span className="font-normal">
                                  {order.customer_email}
                              </span>
                          </li>
                          <li>
                              Phone:{" "}
                              <span className="font-normal">
                                  {order.customer_mobile}
                              </span>
                          </li>
                      </ul>
                  </td>
                  <td>Total: {order.total_amount}</td>
                  <td>
                      <a
                          href=""
                          className="bg-gray-500 text-center text-white px-2 py-1 text-gray-700"
                      >
                          Track
                      </a>
                  </td>
                  <td>
                      <a href="" className="text-blue-800 underline">
                          Generate Invoice
                      </a>
                  </td>
              </tr>
          </table>
          <ProductCard order={order} />
      </div>
  );
}

export default OrderCard