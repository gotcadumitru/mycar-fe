import {
  Language,
  LanguageLabels,
  ToWhomDoesItApply,
  ToWhomDoesItApplyLabels,
  WhenShouldHappen,
  WhereToHappen,
  WhereToHappenLabels,
} from 'enteties/category'
import Skeleton from 'react-loading-skeleton'
import createArrayFromTo from 'shared/lib/utils/createArrayFromTo'

export const WHO_APPLY_TO = [
  ...Object.values(ToWhomDoesItApply).map((value) => ({
    id: value as ToWhomDoesItApply,
    label: ToWhomDoesItApplyLabels[value],
  })),
]

export const WHEN_SHOULD_HAPPEN_OPTIONS = [
  ...Object.keys(WhenShouldHappen).map((key) => ({
    id: WhenShouldHappen[key as keyof typeof WhenShouldHappen],
    label: WhenShouldHappen[key as keyof typeof WhenShouldHappen],
  })),
]

export const WHERE_TO_HAPPEN_OPTIONS = [
  ...Object.values(WhereToHappen).map((value) => ({
    id: value as WhereToHappen,
    label: WhereToHappenLabels[value],
  })),
]
export const GROUPS_ON_TABLE_PAGE = 10
export const MAX_CATEGORY_NAME_LENGTH = 70
export const MAX_CATEGORY_DESCRIPTION_LENGTH = 300
export const createCategoryGroupsMockData = createArrayFromTo(0, 101).map((n) => ({
  id: n,
  isSelected: n % 2 === 1,
  groupName: `Finance Team ${n}`,
  description: `Global Finance ${n}`,
  numberOfMembers: 100 + n,
  extension: 3000 + n,
}))
export const USERS_ON_TABLE_PAGE = 10
export const createCategoryUsersMockData = createArrayFromTo(0, 101).map((n) => ({
  id: n,
  isSelected: n % 2 === 1,
  userName: `Bob Wibble ${n}`,
  country: n % 2 === 1 ? 'UK' : 'RO',
  email: `BWib@natterbox${n}.com`,
  extension: `${2000 + n}`,
}))
export const CreateEditCategoryFormSkeleton = (
  <div className='react-loading-skeleton--create-category'>
    <div className='react-loading-skeleton--grid-2'>
      <Skeleton count={1} height={30} width={300} />
      <Skeleton count={1} height={30} width={300} />
    </div>
    <Skeleton count={1} height={30} />
    <Skeleton count={1} height={30} width={200} />
    <Skeleton count={1} height={85} />
    <div className='react-loading-skeleton--grid-2'>
      <Skeleton count={1} height={30} width={300} />
      <Skeleton count={1} height={30} width={300} />
    </div>
    <div className='react-loading-skeleton--grid-2'>
      <Skeleton count={1} height={30} width={300} />
      <Skeleton count={1} height={30} width={300} />
    </div>
    <div className='react-loading-skeleton--grid-2'>
      <Skeleton count={1} height={30} width={300} />
      <Skeleton count={1} height={30} width={300} />
    </div>
  </div>
)

export const TRANSCRIPTION_LANGUAGE_OPTIONS = [
  ...Object.values(Language).map((value) => ({
    id: value as Language,
    label: LanguageLabels[value],
  })),
]
