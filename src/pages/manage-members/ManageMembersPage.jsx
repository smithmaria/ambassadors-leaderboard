import './ManageMembersPage.css'
import Layout from '../../components/Layout/Layout';
import pencil from '../../assets/pencil.svg'
import trash from '../../assets/trash.svg'

function ManageMembersPage() {
  return (
    <>
      <Layout title="Manage Members">
        <div className='manage-members-page'>
          <div className='add-member-div'>
            <button className='btn-add-member'>+ Add Member</button>
          </div>
          <table className='members-table'>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>Maria</td>
              <td>Smith</td>
              <td>smit9mt@mail.uc.edu</td>
              <td className='member-actions'>
                <img src={pencil} alt="edit icon" />
                <img src={trash} alt='delete icon' />
              </td>
            </tr>
            <tr>
              <td>Malaya</td>
              <td>Castillo</td>
              <td>castilmg@mail.uc.edu</td>
              <td className='member-actions'>
                <img src={pencil} alt="edit icon" />
                <img src={trash} alt='delete icon' />
              </td>          
            </tr>
            <tr>
              <td>Aidan</td>
              <td>Elliott</td>
              <td>elliott@mail.uc.edu</td>
              <td className='member-actions'>
                <img src={pencil} alt="edit icon" />
                <img src={trash} alt='delete icon' />
              </td>          
            </tr>
          </table>
        </div>
      </Layout>
    </>
  )
}

export default ManageMembersPage;