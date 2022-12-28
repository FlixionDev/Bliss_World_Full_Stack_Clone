export default function CartDiv() {
  if (document.getElementById("cart_moda")) {
    document.getElementById("cart_moda").id = "cart_modal";
  } else {
    document.getElementById("cart_modal").id = "cart_moda";
  }
}
