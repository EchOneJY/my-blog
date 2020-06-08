/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 09:38:46
 * @LastEditTime: 2019-08-14 17:55:12
 * @LastEditors: EchOne
 */
import Home from '../pages/home'
import ArticleList from '../pages/article/List'
import ArticleAdd from '../pages/article/Add'
import ArticleDetail from '../pages/article/Detail'
import CategoryList from '../pages/category/List'
import TagsList from '../pages/tags/List'
import ButonCustom from '../pages/ui/Button'
import AlertCustom from '../pages/ui/Alert'
import BraftEditor from '../pages/editors/BraftEditor'
import ReactMde from '../pages/editors/ReactMde'
import Echarts from '../pages/charts/echarts/SimplePie'
import Redux from '../pages/redux/redux'
import ReactRedux from '../pages/redux/react-redux'
import ReduxThunk from '../pages/redux/redux-thunk'
import ReduxSaga from '../pages/redux/redux-saga'
import myRedux from '../pages/redux/myRedux'

let routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/article/list',
    component: ArticleList
  },
  {
    path: '/article/add',
    component: ArticleAdd
  },
  {
    path: '/article/detail/:id',
    component: ArticleDetail
  },
  {
    path: '/category/list',
    component: CategoryList
  },
  {
    path: '/tags/list',
    component: TagsList
  },
  {
    path: '/ui/button',
    component: ButonCustom
  },
  {
    path: '/ui/alert',
    component: AlertCustom
  },
  {
    path: '/editor/braft',
    component: BraftEditor
  },
  {
    path: '/editor/mde',
    component: ReactMde
  },
  {
    path: '/charts/echarts',
    component: Echarts
  },
  {
    path: '/redux/redux',
    component: Redux
  },
  {
    path: '/redux/react_redux',
    component: ReactRedux
  },
  {
    path: '/redux/redux_thunk',
    component: ReduxThunk
  },
  {
    path: '/redux/redux_saga',
    component: ReduxSaga
  },
  {
    path: '/redux/my_redux',
    component: myRedux
  }
]

export default routes
