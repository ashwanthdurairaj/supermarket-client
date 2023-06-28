
function Cart({goal}) {
  console.log(goal);
    return (
    <tr>
        <td>{goal.item}</td>
        <td>{goal.brand}</td>
        <td>{goal.price}</td>
        <td>{goal.quantity}</td>
        <td>{goal.type}</td>
        <td>{goal.total}</td>
    </tr>
  )
}

export default Cart