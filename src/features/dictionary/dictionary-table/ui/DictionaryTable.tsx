import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import HiOutlineDuplicate from 'shared/assets/icons/HiOutlineDuplicate.svg'
import MdHistory from 'shared/assets/icons/MdHistory.svg'
import MdOutlineDelete from 'shared/assets/icons/MdOutlineDelete.svg'
import MdOutlineEdit from 'shared/assets/icons/MdOutlineEdit.svg'
import { TOAST_MESSAGE, MODAL_TITLE } from 'shared/defaults/text'
import Checkbox from 'shared/ui/Checkbox'
import Popup from 'shared/ui/Popup'
import Table, { TableCellEllipsis, TableType } from 'shared/ui/Table'
import { ConfirmModal, ConfirmModalOption, OpenedModalType } from 'widgets/ConfirmModal'
import {
  dictionaryTableHeaderItems,
  dictionaryTableMockData,
  openedModalInitialValues,
} from '../lib/dictionary-table.defaults'

const DictionaryTable: FC = () => {
  const [openedModal, setOpenedModal] = useState<OpenedModalType>(openedModalInitialValues)
  const onActiveClick = (dictionary: (typeof dictionaryTableMockData)[0]) => {
    setOpenedModal({
      modalType: ConfirmModalOption.CHANGE_IS_ACTIVE,
      id: dictionary.id,
    })
  }
  const onCloseConfirmModal = () => {
    setOpenedModal(openedModalInitialValues)
  }
  const onConfirmChangeIsActive = () => {
    toast.error(TOAST_MESSAGE.NOT_IMPLEMENTED)
    onCloseConfirmModal()
  }

  const selectedDictionary = dictionaryTableMockData.find(
    (dictionary) => dictionary.id === openedModal.id,
  )

  return (
    <div>
      {openedModal.modalType === ConfirmModalOption.CHANGE_IS_ACTIVE && selectedDictionary && (
        <ConfirmModal
          title={
            selectedDictionary.isActive
              ? MODAL_TITLE.DISABLE_DICTIONARY
              : MODAL_TITLE.ENABLE_DICTIONARY
          }
          questionText={
            selectedDictionary.isActive
              ? MODAL_TITLE.DISABLE_DICTIONARY_CONFIRMATION
              : MODAL_TITLE.ENABLE_DICTIONARY_CONFIRMATION
          }
          onConfirm={onConfirmChangeIsActive}
          onClose={onCloseConfirmModal}
        />
      )}
      <Table
        containerClassName='table__container--no-scroll'
        minWidth='1100px'
        tableType={TableType.NO_BORDERS}
        headerItems={dictionaryTableHeaderItems}
        rows={dictionaryTableMockData.map((dictionary) => ({
          id: dictionary.id,
          columns: [
            <TableCellEllipsis key={1} text={dictionary.term} />,
            <TableCellEllipsis key={1} text={dictionary.description} />,
            <TableCellEllipsis key={1} text={dictionary.createdBy} />,
            dictionary.createdDate,
            <Checkbox
              key={1}
              onChange={() => onActiveClick(dictionary)}
              isGrey
              checked={dictionary.isActive}
              className='table__checkbox'
            />,
            dictionary.weighting,
            dictionary.indicatedLanguage,
            <div key={1} className='table__icons'>
              <Popup
                referenceElement={<MdOutlineEdit onClick={onConfirmChangeIsActive} />}
                popupElement={<div className='table__icon-text'>Edit</div>}
                placement='bottom'
              />
              <Popup
                referenceElement={<HiOutlineDuplicate onClick={onConfirmChangeIsActive} />}
                popupElement={<div className='table__icon-text'>Duplicate</div>}
                placement='bottom'
              />
              <Popup
                referenceElement={<MdOutlineDelete onClick={onConfirmChangeIsActive} />}
                popupElement={<div className='table__icon-text'>Delete</div>}
                placement='bottom'
              />
              <Popup
                referenceElement={<MdHistory onClick={onConfirmChangeIsActive} />}
                popupElement={<div className='table__icon-text'>History</div>}
                placement='bottom'
              />
            </div>,
          ],
        }))}
      />
    </div>
  )
}
export default DictionaryTable
