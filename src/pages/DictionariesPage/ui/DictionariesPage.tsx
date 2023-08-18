import MainLayout from 'app/layout/MainLayout/MainLayout'
import DictionaryTable from 'features/dictionary/dictionary-table'
// Please don't delete this
// import { SidebarBurger } from 'shared/ui/Sidebar'
// import Toolbar, { ToolbarDictionaryOptionsRight } from 'widgets/Toolbar'

const DictionariesPage = () => (
  <>
    {/*<Toolbar left={<SidebarBurger />} right={<ToolbarDictionaryOptionsRight />} />*/}
    <MainLayout>
      <DictionaryTable />
    </MainLayout>
  </>
)
export default DictionariesPage
