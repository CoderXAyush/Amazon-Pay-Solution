// Dummy data
const cardData = [
    {
      card_number: "1234-5678-9101-1121",
      bank_name: "State Bank of India",
      type: "Credit",
      valid_till: new Date("2025-12-31"),
    },
    {
      card_number: "2234-5678-9101-1122",
      bank_name: "HDFC Bank",
      type: "Debit",
      valid_till: new Date("2024-11-30"),
    },
    {
      card_number: "3234-5678-9101-1123",
      bank_name: "ICICI Bank",
      type: "Credit",
      valid_till: new Date("2025-10-31"),
    },
    {
      card_number: "4234-5678-9101-1124",
      bank_name: "Axis Bank",
      type: "Debit",
      valid_till: new Date("2024-09-30"),
    },
    {
      card_number: "5234-5678-9101-1125",
      bank_name: "Kotak Mahindra Bank",
      type: "Credit",
      valid_till: new Date("2025-08-31"),
    },
    {
      card_number: "6234-5678-9101-1126",
      bank_name: "Bank of Baroda",
      type: "Debit",
      valid_till: new Date("2024-07-31"),
    },
    {
      card_number: "7234-5678-9101-1127",
      bank_name: "Punjab National Bank",
      type: "Credit",
      valid_till: new Date("2025-06-30"),
    },
    {
      card_number: "8234-5678-9101-1128",
      bank_name: "Union Bank of India",
      type: "Debit",
      valid_till: new Date("2024-05-31"),
    },
    {
      card_number: "9234-5678-9101-1129",
      bank_name: "Canara Bank",
      type: "Credit",
      valid_till: new Date("2025-04-30"),
    },
    {
      card_number: "0234-5678-9101-1130",
      bank_name: "IndusInd Bank",
      type: "Debit",
      valid_till: new Date("2024-03-31"),
    },
  ];
  
  const giftVoucherData = [
    {
      voucher_code: "GV123",
      details: "10% off on electronics",
      received_date: new Date("2023-01-01"),
      expiry_date: new Date("2024-01-01"),
    },
    {
      voucher_code: "GV124",
      details: "20% off on fashion",
      received_date: new Date("2023-02-01"),
      expiry_date: new Date("2024-02-01"),
    },
    {
      voucher_code: "GV125",
      details: "15% off on groceries",
      received_date: new Date("2023-03-01"),
      expiry_date: new Date("2024-03-01"),
    },
    {
      voucher_code: "GV126",
      details: "25% off on books",
      received_date: new Date("2023-04-01"),
      expiry_date: new Date("2024-04-01"),
    },
    {
      voucher_code: "GV127",
      details: "5% off on beauty products",
      received_date: new Date("2023-05-01"),
      expiry_date: new Date("2024-05-01"),
    },
    {
      voucher_code: "GV128",
      details: "10% off on furniture",
      received_date: new Date("2023-06-01"),
      expiry_date: new Date("2024-06-01"),
    },
    {
      voucher_code: "GV129",
      details: "30% off on shoes",
      received_date: new Date("2023-07-01"),
      expiry_date: new Date("2024-07-01"),
    },
    {
      voucher_code: "GV130",
      details: "50% off on accessories",
      received_date: new Date("2023-08-01"),
      expiry_date: new Date("2024-08-01"),
    },
    {
      voucher_code: "GV131",
      details: "20% off on sports equipment",
      received_date: new Date("2023-09-01"),
      expiry_date: new Date("2024-09-01"),
    },
    {
      voucher_code: "GV132",
      details: "10% off on travel tickets",
      received_date: new Date("2023-10-01"),
      expiry_date: new Date("2024-10-01"),
    },
  ];
  
  const paymentData = [
    {
      paymentID: "PMT123",
      payment_date: new Date("2023-01-10"),
      status: "Success",
      amount: 100.0,
      category: "Shopping",
      method: "Credit Card",
      bank_name: "Bank of Baroda",
    },
    {
      paymentID: "PMT124",
      payment_date: new Date("2023-02-10"),
      status: "Failed",
      amount: 50.0,
      category: "Grocery",
      method: "UPI",
      upi_payment_platform: "Google Pay",
    },
    {
      paymentID: "PMT125",
      payment_date: new Date("2023-03-15"),
      status: "Success",
      amount: 200.0,
      category: "Dining",
      method: "Debit Card",
      bank_name: "HDFC Bank",
    },
    {
      paymentID: "PMT126",
      payment_date: new Date("2023-04-20"),
      status: "Success",
      amount: 75.0,
      category: "Travel",
      method: "Amazon Pay Wallet",
    },
    {
      paymentID: "PMT127",
      payment_date: new Date("2023-05-25"),
      status: "Success",
      amount: 150.0,
      category: "Entertainment",
      method: "Credit Card",
      bank_name: "ICICI Bank",
    },
    {
      paymentID: "PMT128",
      payment_date: new Date("2023-06-30"),
      status: "Success",
      amount: 80.0,
      category: "Grocery",
      method: "UPI",
      upi_payment_platform: "PhonePe",
    },
    {
      paymentID: "PMT129",
      payment_date: new Date("2023-07-05"),
      status: "Failed",
      amount: 120.0,
      category: "Shopping",
      method: "Debit Card",
      bank_name: "Axis Bank",
    },
    {
      paymentID: "PMT130",
      payment_date: new Date("2023-08-10"),
      status: "Success",
      amount: 300.0,
      category: "Travel",
      method: "Credit Card",
      bank_name: "SBI",
    },
    {
      paymentID: "PMT131",
      payment_date: new Date("2023-09-15"),
      status: "Success",
      amount: 60.0,
      category: "Dining",
      method: "Amazon Pay Wallet",
    },
    {
      paymentID: "PMT132",
      payment_date: new Date("2023-10-20"),
      status: "Failed",
      amount: 220.0,
      category: "Entertainment",
      method: "UPI",
      upi_payment_platform: "Paytm",
    },
    {
      paymentID: "PMT133",
      payment_date: new Date("2023-11-25"),
      status: "Success",
      amount: 90.0,
      category: "Grocery",
      method: "Debit Card",
      bank_name: "HDFC Bank",
    },
    {
      paymentID: "PMT134",
      payment_date: new Date("2023-12-30"),
      status: "Success",
      amount: 110.0,
      category: "Shopping",
      method: "Credit Card",
      bank_name: "ICICI Bank",
    },
    {
      paymentID: "PMT135",
      payment_date: new Date("2024-01-05"),
      status: "Failed",
      amount: 70.0,
      category: "Dining",
      method: "UPI",
      upi_payment_platform: "Google Pay",
    },
    {
      paymentID: "PMT136",
      payment_date: new Date("2024-02-10"),
      status: "Success",
      amount: 130.0,
      category: "Entertainment",
      method: "Debit Card",
      bank_name: "Axis Bank",
    },
    {
      paymentID: "PMT137",
      payment_date: new Date("2024-03-15"),
      status: "Failed",
      amount: 95.0,
      category: "Travel",
      method: "Amazon Pay Wallet",
    },
    {
      paymentID: "PMT138",
      payment_date: new Date("2024-04-20"),
      status: "Success",
      amount: 170.0,
      category: "Shopping",
      method: "Credit Card",
      bank_name: "SBI",
    },
    {
      paymentID: "PMT139",
      payment_date: new Date("2024-05-25"),
      status: "Failed",
      amount: 85.0,
      category: "Grocery",
      method: "UPI",
      upi_payment_platform: "PhonePe",
    },
    {
      paymentID: "PMT140",
      payment_date: new Date("2024-06-30"),
      status: "Success",
      amount: 140.0,
      category: "Dining",
      method: "Debit Card",
      bank_name: "HDFC Bank",
    },
    {
      paymentID: "PMT141",
      payment_date: new Date("2024-07-05"),
      status: "Failed",
      amount: 60.0,
      category: "Travel",
      method: "Amazon Pay Wallet",
    },
    {
      paymentID: "PMT142",
      payment_date: new Date("2024-08-10"),
      status: "Success",
      amount: 160.0,
      category: "Entertainment",
      method: "Credit Card",
      bank_name: "ICICI Bank",
    },
    {
      paymentID: "PMT143",
      payment_date: new Date("2024-09-15"),
      status: "Failed",
      amount: 50.0,
      category: "Grocery",
      method: "UPI",
      upi_payment_platform: "Google Pay",
    },
  ];
  
  const productData = [
    { price: 499.99, detail: "Smartphone", category: "Electronics" },
    { price: 29.99, detail: "T-Shirt", category: "Clothing" },
    { price: 149.99, detail: "Running Shoes", category: "Footwear" },
    { price: 199.99, detail: "Wireless Headphones", category: "Electronics" },
    { price: 9.99, detail: "Notebook", category: "Stationery" },
    { price: 39.99, detail: "Jeans", category: "Clothing" },
    { price: 799.99, detail: "Laptop", category: "Electronics" },
    { price: 14.99, detail: "Sunglasses", category: "Accessories" },
    { price: 249.99, detail: "Fitness Tracker", category: "Electronics" },
    { price: 69.99, detail: "Sneakers", category: "Footwear" },
    { price: 79.99, detail: "Hoodie", category: "Clothing" },
    { price: 349.99, detail: "Tablet", category: "Electronics" },
    { price: 19.99, detail: "Backpack", category: "Accessories" },
    { price: 149.99, detail: "Dress Shoes", category: "Footwear" },
    { price: 9.99, detail: "Pen Set", category: "Stationery" },
    { price: 49.99, detail: "Watch", category: "Accessories" },
    { price: 199.99, detail: "Camera", category: "Electronics" },
    { price: 34.99, detail: "Polo Shirt", category: "Clothing" },
    { price: 129.99, detail: "Gaming Mouse", category: "Electronics" },
    { price: 54.99, detail: "Running Shorts", category: "Clothing" },
    { price: 89.99, detail: "Wireless Mouse", category: "Electronics" },
    { price: 24.99, detail: "Water Bottle", category: "Accessories" },
    { price: 119.99, detail: "Bluetooth Speaker", category: "Electronics" },
    { price: 44.99, detail: "Wallet", category: "Accessories" },
    { price: 299.99, detail: "Smartwatch", category: "Electronics" },
    { price: 74.99, detail: "Running Jacket", category: "Clothing" },
    { price: 39.99, detail: "Headphones", category: "Electronics" },
    { price: 19.99, detail: "Gym Bag", category: "Accessories" },
    { price: 149.99, detail: "External Hard Drive", category: "Electronics" },
    { price: 49.99, detail: "Belt", category: "Accessories" },
  ];
  
  const purchaseData = [
      { product_id: 'PUR123', paid_amount: 450.0, saving_on: 49.99, date_of_purchase: "2023-01-15" },
      { product_id: 'PUR124', paid_amount: 25.0, saving_on: 4.99, date_of_purchase: "2023-02-10" },
      { product_id: 'PUR125', paid_amount: 119.99, saving_on: 30.0, date_of_purchase: "2023-03-18" },
      { product_id: 'PUR126', paid_amount: 150.0, saving_on: 20.0, date_of_purchase: "2023-04-22" },
      { product_id: 'PUR127', paid_amount: 8.99, saving_on: 1.0, date_of_purchase: "2023-05-05" },
      { product_id: 'PUR128', paid_amount: 35.99, saving_on: 4.0, date_of_purchase: "2023-06-30" },
      { product_id: 'PUR129', paid_amount: 749.99, saving_on: 50.0, date_of_purchase: "2023-07-17" },
      { product_id: 'PUR130', paid_amount: 10.99, saving_on: 4.0, date_of_purchase: "2023-08-12" },
      { product_id: 'PUR131', paid_amount: 220.0, saving_on: 29.99, date_of_purchase: "2023-09-28" },
      { product_id: 'PUR132', paid_amount: 79.99, saving_on: 10.0, date_of_purchase: "2023-10-03" },
      { product_id: 'PUR133', paid_amount: 69.99, saving_on: 10.0, date_of_purchase: "2023-11-20" },
      { product_id: 'PUR134', paid_amount: 349.99, saving_on: 0.0, date_of_purchase: "2023-12-25" },
      { product_id: 'PUR135', paid_amount: 15.99, saving_on: 0.0, date_of_purchase: "2024-01-15" },
      { product_id: 'PUR136', paid_amount: 139.99, saving_on: 10.0, date_of_purchase: "2024-02-09" },
      { product_id: 'PUR137', paid_amount: 5.99, saving_on: 0.0, date_of_purchase: "2024-03-02" },
      { product_id: 'PUR138', paid_amount: 40.99, saving_on: 4.0, date_of_purchase: "2024-04-18" },
      { product_id: 'PUR139', paid_amount: 179.99, saving_on: 0.0, date_of_purchase: "2024-05-20" },
      { product_id: 'PUR140', paid_amount: 29.99, saving_on: 0.0, date_of_purchase: "2024-06-10" },
      { product_id: 'PUR141', paid_amount: 109.99, saving_on: 20.0, date_of_purchase: "2024-07-05" },
      { product_id: 'PUR142', paid_amount: 49.99, saving_on: 0.0, date_of_purchase: "2024-08-30" },
    ];
    
  
  const savingData = [
    { payment_id: "PMT125", purchase_id: "PUR125", amount: 10.0 },
    { payment_id: "PMT126", purchase_id: "PUR126", amount: 8.5 },
    { payment_id: "PMT127", purchase_id: "PUR127", amount: 20.0 },
    { payment_id: "PMT128", purchase_id: "PUR128", amount: 5.0 },
    { payment_id: "PMT129", purchase_id: "PUR129", amount: 15.0 },
    { payment_id: "PMT130", purchase_id: "PUR130", amount: 12.99 },
    { payment_id: "PMT131", purchase_id: "PUR131", amount: 25.0 },
    { payment_id: "PMT132", purchase_id: "PUR132", amount: 3.5 },
    { payment_id: "PMT133", purchase_id: "PUR133", amount: 18.0 },
    { payment_id: "PMT134", purchase_id: "PUR134", amount: 7.99 },
    { payment_id: "PMT135", purchase_id: "PUR135", amount: 30.0 },
    { payment_id: "PMT136", purchase_id: "PUR136", amount: 9.0 },
    { payment_id: "PMT137", purchase_id: "PUR137", amount: 22.5 },
    { payment_id: "PMT138", purchase_id: "PUR138", amount: 6.75 },
    { payment_id: "PMT139", purchase_id: "PUR139", amount: 17.5 },
    { payment_id: "PMT140", purchase_id: "PUR140", amount: 14.99 },
    { payment_id: "PMT141", purchase_id: "PUR141", amount: 35.0 },
    { payment_id: "PMT142", purchase_id: "PUR142", amount: 8.0 },
    { payment_id: "PMT143", purchase_id: "PUR143", amount: 19.5 },
    { payment_id: "PMT144", purchase_id: "PUR144", amount: 4.25 },
    { payment_id: "PMT145", purchase_id: "PUR145", amount: 10.0 },
    { payment_id: "PMT146", purchase_id: "PUR146", amount: 12.5 },
    { payment_id: "PMT147", purchase_id: "PUR147", amount: 28.0 },
    { payment_id: "PMT148", purchase_id: "PUR148", amount: 3.25 },
    { payment_id: "PMT149", purchase_id: "PUR149", amount: 16.0 },
    { payment_id: "PMT150", purchase_id: "PUR150", amount: 6.49 },
    { payment_id: "PMT151", purchase_id: "PUR151", amount: 22.0 },
    { payment_id: "PMT152", purchase_id: "PUR152", amount: 9.75 },
    { payment_id: "PMT153", purchase_id: "PUR153", amount: 24.5 },
    { payment_id: "PMT154", purchase_id: "PUR154", amount: 5.75 },
    { payment_id: "PMT155", purchase_id: "PUR155", amount: 13.0 },
    { payment_id: "PMT156", purchase_id: "PUR156", amount: 11.99 },
    { payment_id: "PMT157", purchase_id: "PUR157", amount: 27.5 },
    { payment_id: "PMT158", purchase_id: "PUR158", amount: 8.25 },
    { payment_id: "PMT159", purchase_id: "PUR159", amount: 18.0 },
    { payment_id: "PMT160", purchase_id: "PUR160", amount: 9.99 },
    { payment_id: "PMT161", purchase_id: "PUR161", amount: 15.0 },
    { payment_id: "PMT162", purchase_id: "PUR162", amount: 6.0 },
    { payment_id: "PMT163", purchase_id: "PUR163", amount: 21.5 },
    { payment_id: "PMT164", purchase_id: "PUR164", amount: 7.75 },
    { payment_id: "PMT165", purchase_id: "PUR165", amount: 12.0 },
    { payment_id: "PMT166", purchase_id: "PUR166", amount: 10.49 },
    { payment_id: "PMT167", purchase_id: "PUR167", amount: 26.0 },
    { payment_id: "PMT168", purchase_id: "PUR168", amount: 7.25 },
    { payment_id: "PMT169", purchase_id: "PUR169", amount: 20.0 },
    { payment_id: "PMT170", purchase_id: "PUR170", amount: 8.99 },
    { payment_id: "PMT171", purchase_id: "PUR171", amount: 23.0 },
    { payment_id: "PMT172", purchase_id: "PUR172", amount: 9.25 },
    { payment_id: "PMT173", purchase_id: "PUR173", amount: 16.5 },
    { payment_id: "PMT174", purchase_id: "PUR174", amount: 5.49 },
    { payment_id: "PMT175", purchase_id: "PUR175", amount: 15.0 },
  ];
  
  const offerData = [
    {
      offer_code: "OFFER001",
      offer_on: "Credit Card",
      bank_name: "Bank of America",
      percentage_discount: 10,
      minimum_purchase_value: 100,
    },
    {
      offer_code: "OFFER002",
      offer_on: "UPI",
      bank_name: "HDFC Bank",
      percentage_discount: 15,
      minimum_purchase_value: 200,
    },
    {
      offer_code: "OFFER003",
      offer_on: "Amazon Pay Wallet",
      bank_name: "ICICI Bank",
      amount_discount: 50,
      minimum_purchase_value: 300,
    },
    {
      offer_code: "OFFER004",
      offer_on: "Credit Card",
      bank_name: "Axis Bank",
      percentage_discount: 20,
      minimum_purchase_value: 150,
    },
    {
      offer_code: "OFFER005",
      offer_on: "UPI",
      bank_name: "Kotak Mahindra Bank",
      percentage_discount: 12,
      minimum_purchase_value: 250,
    },
    {
      offer_code: "OFFER006",
      offer_on: "Amazon Pay Wallet",
      bank_name: "Bank of Baroda",
      amount_discount: 30,
      minimum_purchase_value: 350,
    },
    {
      offer_code: "OFFER007",
      offer_on: "Credit Card",
      bank_name: "Punjab National Bank",
      percentage_discount: 25,
      minimum_purchase_value: 120,
    },
    {
      offer_code: "OFFER008",
      offer_on: "UPI",
      bank_name: "Union Bank of India",
      percentage_discount: 18,
      minimum_purchase_value: 180,
    },
    {
      offer_code: "OFFER009",
      offer_on: "Amazon Pay Wallet",
      bank_name: "Canara Bank",
      amount_discount: 40,
      minimum_purchase_value: 280,
    },
    {
      offer_code: "OFFER010",
      offer_on: "Credit Card",
      bank_name: "IndusInd Bank",
      percentage_discount: 30,
      minimum_purchase_value: 200,
    },
    {
      offer_code: "OFFER011",
      offer_on: "UPI",
      bank_name: "State Bank of India",
      percentage_discount: 22,
      minimum_purchase_value: 220,
    },
    {
      offer_code: "OFFER012",
      offer_on: "Amazon Pay Wallet",
      bank_name: "IDBI Bank",
      amount_discount: 45,
      minimum_purchase_value: 320,
    },
    {
      offer_code: "OFFER013",
      offer_on: "Credit Card",
      bank_name: "Federal Bank",
      percentage_discount: 35,
      minimum_purchase_value: 130,
    },
    {
      offer_code: "OFFER014",
      offer_on: "UPI",
      bank_name: "Yes Bank",
      percentage_discount: 28,
      minimum_purchase_value: 170,
    },
    {
      offer_code: "OFFER015",
      offer_on: "Amazon Pay Wallet",
      bank_name: "RBL Bank",
      amount_discount: 55,
      minimum_purchase_value: 370,
    },
    {
      offer_code: "OFFER016",
      offer_on: "Credit Card",
      bank_name: "HSBC Bank",
      percentage_discount: 40,
      minimum_purchase_value: 180,
    },
    {
      offer_code: "OFFER017",
      offer_on: "UPI",
      bank_name: "DBS Bank",
      percentage_discount: 32,
      minimum_purchase_value: 210,
    },
    {
      offer_code: "OFFER018",
      offer_on: "Amazon Pay Wallet",
      bank_name: "Standard Chartered Bank",
      amount_discount: 60,
      minimum_purchase_value: 400,
    },
    {
      offer_code: "OFFER019",
      offer_on: "Credit Card",
      bank_name: "Citi Bank",
      percentage_discount: 45,
      minimum_purchase_value: 150,
    },
    {
      offer_code: "OFFER020",
      offer_on: "UPI",
      bank_name: "American Express",
      percentage_discount: 38,
      minimum_purchase_value: 190,
    },
  ];
  
  const userData = [
      { email_id: 'aanimeshtripathy@gmail.com', payment_details: [], gift_vouchers_details: [], card_details: [], savings_details: [], purchase_details: [] },
      { email_id: 'erum.meraj23@gmail.com', payment_details: [], gift_vouchers_details: [], card_details: [], savings_details: [], purchase_details: [] },
    ];