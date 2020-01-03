import React from 'react'
import { Input, Button, List } from 'antd'
import store from '@/store'
import { connect } from 'react-redux'
import {
  changeInputAction,
  addItemAction,
  deleteItemAction
} from '@/store/actionCreators'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.storeChange)
  }

  storeChange = () => {
    this.setState(store.getState())
  }

  changeInputVal = e => {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  addEvents = () => {
    const action = addItemAction()
    store.dispatch(action)
  }

  deleteItem = idx => {
    const action = deleteItemAction(idx)
    store.dispatch(action)
  }

  render() {
    return (
      <div>
        <div>
          <Input
            value={this.state.todos.inputValue}
            placeholder="Write Something"
            style={{ width: '250px', marginRight: '10px' }}
            onChange={this.changeInputVal}
          />
          <Button type="primary" onClick={this.addEvents}>
            增加
          </Button>
        </div>
        <div style={{ marginTop: '20px', width: '300px' }}>
          <List
            bordered
            //关键代码-----------start
            dataSource={this.state.todos.list}
            //关键代码-----------end
            renderItem={(item, index) => (
              <List.Item onClick={() => this.deleteItem(index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }

  //const { inputValue, changeInputVal, addEvents, list, deleteItem } = props
  // return (
  //   <div>
  //     <div>
  //       <Input
  //         value={inputValue}
  //         placeholder="Write Something"
  //         style={{ width: '250px', marginRight: '10px' }}
  //         onChange={changeInputAction}
  //       />
  //       <Button type="primary" onClick={addItemAction}>
  //         增加
  //       </Button>
  //     </div>
  //     <div style={{ marginTop: '20px', width: '300px' }}>
  //       <List
  //         bordered
  //         //关键代码-----------start
  //         dataSource={list}
  //         //关键代码-----------end
  //         renderItem={(item, index) => (
  //           <List.Item onClick={() => deleteItemAction(index)}>
  //             {item}
  //           </List.Item>
  //         )}
  //       />
  //     </div>
  //   </div>
  // )
}

// const stateToProps = state => {
//   return {
//     inputValue: state.todos.inputValue,
//     list: state.todos.list
//   }
// }

// const dispatchToProps = dispatch => {
//   return {
//     changeInputVal(e) {
//       const action = changeInputAction(e.target.value)
//       dispatch(action)
//     },
//     addEvents() {
//       const action = addItemAction()
//       dispatch(action)
//     },
//     deleteItem(idx) {
//       const action = deleteItemAction(idx)
//       dispatch(action)
//     }
//   }
// }

// export default connect(
//   stateToProps,
//   dispatchToProps
// )(Home)
export default Home
