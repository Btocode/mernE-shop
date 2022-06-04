import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    user : {
      type : mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    orderItems : [
      {
      name : {type :String, required : true},
      qty  : {type : Number, required: true},
      image: {type : String, required: true},
      price : {type : Number, required: true},
      product : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      },
    }
  ],
    shippingAddress : {
      address : {type: String},
      postalCode : {type: String},
      city : {type: String},
      country: {type: String},
    },
    paymentMethod : {
      type: String
    },
    paymentResult : {
      id : {type: String}, 
      Status : {type: String}, 
      update_time : {type: String}, 
      email_address : {type: String}, 
    },
    taxPrice : {
      type: Number, 
      required: true,
      default: 0.0
    },
    totalPrice : {
      type: Number, 
      required: true,
      default: 0.0
    },
    isPaid : {
      type: Boolean, 
      required: true,
      default: false
    },
    paidAt : {
      type: Date, 
    },
    isDelivered : {
      type: Boolean, 
      required: true,
      default: false
    },
    deliveredAt : {
      type: Date, 
    },


},{
  timeStamps : true,
})

const Order = mongoose.model("Order", orderSchema);

export default Order