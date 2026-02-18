import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
      trim: true
    },

    studentRollNo: {
      type: String,
      required: true,
      unique: true
    },

    studentEmail: {
      type: String,
      required: true,
      unique: true
    },

    phoneNumber: {
      type: String,
      required: true
    },

    totalFees: {
      type: Number,
      required: true
    },

    paymentMode: {
      type: String,
      enum: ["full", "installment"],
      required: true
    },

    paidAmount: {
      type: Number,
      required: true,
      default: 0
    },

    pendingAmount: {
      type: Number
    },

    feeStatus: {
      type: String,
      enum: ["paid", "pending"]
    }
  },
  { timestamps: true }
);

// 🔥 auto-calculate pendingAmount & feeStatus
studentSchema.pre("save", function() {
  this.pendingAmount = this.totalFees - this.paidAmount;
  this.feeStatus = this.pendingAmount === 0 ? "paid" : "pending";
});

const Student = mongoose.model("Student", studentSchema);
export default Student;