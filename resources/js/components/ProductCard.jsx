
const ProductCard = ({order}) => {
  return (
      <div className="p-3 flex gap-5 w-1/2 mt-5 h-full flex-wrap items-center rounded-2xl shadow shadow-gray-600 border-r border-b">
          <div className="">
              <img
                  className="object-cover w-30"
                  src={order.product_imageUrl}
                  alt="laptop_image"
              />
          </div>
          <div>
              <a href="" className="text-blue-700 underline">
                  {order.product_name}
              </a>
              <div className="flex gap-5 px-2 font-semibold">
                  <div className="">
                      <h5>
                          Model:
                          <span className="font-normal">
                              {order.product_model}
                          </span>
                      </h5>
                      <h5>
                          Price:
                          <span className="font-normal">{order.price}</span>
                      </h5>
                      <h5>
                          Date:
                          <span className="font-normal">
                              {order.order_date}
                          </span>
                      </h5>
                      <h5>
                          Discount:
                          <span className="font-normal">{order.discount}</span>
                      </h5>
                  </div>
                  <div>
                      <h5>
                          Qty:
                          <span className="font-normal">{order.quantity}</span>
                      </h5>
                      <h5>
                          Delivery <br /> Charges:
                          <span className="font-normal">
                              {order.delivery_charges}
                          </span>
                      </h5>
                      <h5>
                          Status:
                          <span className="font-normal">{order.status}</span>
                      </h5>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default ProductCard