import MainLayout from 'app/layout/MainLayout/MainLayout'
import CategoryTable from 'features/category/category-table'
import { SidebarBurger } from 'shared/ui/Sidebar'
import Toolbar, { ToolbarCategoryOptionsRight } from 'widgets/Toolbar'

const CategoriesPage = () => (
  <>
    <Toolbar left={<SidebarBurger />} right={<ToolbarCategoryOptionsRight />} />
    <MainLayout>
      <CategoryTable />
    </MainLayout>
  </>
)
export default CategoriesPage
