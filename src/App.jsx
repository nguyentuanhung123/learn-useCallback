import { useCallback, useState } from 'react'

import './App.css'

import ChildComponent from './components/ChildComponent';

const App = () => {
  const [users, setUsers] = useState([]);

  // Khi gán một biến bằng một function thì nó là một tham chiếu
  // Khi App re-render thì getData đã tham chiếu đến một địa chỉ khác
  // getData đã bị thay đổi khi Component re-render -> hàm useEffect trong hàm ChildComponent sẽ được thực thi lại
  // Sử dụng useCallback tượng tự useMemu trong việc ghi nhớ function mà không tạo lại một function mới khi App component re-render
  
  const getData = useCallback((type) => {
    return fetch(`https://reqres.in/api/${type}`)
  }, []);

  /**
   * Tham trị
   * let a = 3
   * let b = 3
   * number, string, boolean, ...
   * a === b ==> true
   * 
   * Tham chiếu
   * object, array, function
   * let c = (type) => {
    return fetch(`https://reqres.in/api/${type}`)
  }; // gán địa chỉ ở trong bộ nhớ
   * let d = (type) => {
    return fetch(`https://reqres.in/api/${type}`)
  }; // gán địa chỉ ở trong bộ nhớ
   * c === d ==> false
   */

  const handleClick = () => {
    getData('users')
      .then((res) => res.json())
      .then((res) => {
        const users = res.data;
        setUsers(users);
      })
  };

  return (
    <>
      <p>Data: </p>
      <button onClick={handleClick}>Get Users Data</button>
      <p>{JSON.stringify(users)}</p>
      <ChildComponent getData={getData}/>
    </>
  )
}

export default App;
