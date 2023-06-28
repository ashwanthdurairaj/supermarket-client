
function DemandItem({ goal }) {
  return (
    <tr>
        <td>{goal.item_name}</td>
        <td>{goal.brand_name}</td>
        <td>{goal.quantity_sold} {goal.item_type}</td>
        <td>{goal.sales}</td>
    </tr>
  )
}

export default DemandItem