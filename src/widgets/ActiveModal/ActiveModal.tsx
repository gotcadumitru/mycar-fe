import CreateEditCategoryModal from 'features/category/category-create-edit'
import ViewCategoryModal from 'features/category/category-view'
import { FC } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { RoutePaths } from 'shared/config/router/RoutePaths'
import { OpenMode, QueryParams } from 'shared/types/types'

export const ActiveModal: FC = () => {
  const [searchParams] = useSearchParams()
  const location = useLocation()
  // please do not remove
  // const isDictionaryRoute = location.pathname.startsWith(RoutePaths.dictionary)
  const isCategoryRoute = location.pathname.startsWith(RoutePaths.category)

  const modalType = searchParams.get(QueryParams.MODAL) as OpenMode
  const idEncoded = searchParams.get(QueryParams.ID)
  const idDecoded = idEncoded ? decodeURIComponent(idEncoded) : null

  if (!modalType) return null

  // please do not remove
  // if (isDictionaryRoute) {
  //   switch (modalType) {
  //     case OpenMode.ADD: {
  //       return (
  //           <DictionaryCreateModalLazy mode={modalType} id={null} />
  //       )
  //     }
  //     case OpenMode.EDIT: {
  //       return (
  //           <CreateEditCategoryModalLazy mode={modalType} id={id} />
  //       )
  //     }
  //     case OpenMode.HISTORY: {
  //       return (
  //           <DictionaryHistoryModalLazy id={id} mode={modalType} />
  //       )
  //     }
  //     default:
  //       break
  //   }
  // }
  if (isCategoryRoute) {
    switch (modalType) {
      case OpenMode.VIEW: {
        return <ViewCategoryModal id={idDecoded} />
      }
      case OpenMode.CREATE_FROM_TEMPLATE:
      case OpenMode.CREATE:
      case OpenMode.CLONE:
      case OpenMode.EDIT: {
        return <CreateEditCategoryModal mode={modalType} id={idDecoded} />
      }
      // Please don't delete this
      // case OpenMode.HISTORY: {
      //   return (
      //       <CategoryHistoryModalLazy id={id} mode={modalType} />
      //   )
      // }
      default:
        break
    }
  }
  return null
}
