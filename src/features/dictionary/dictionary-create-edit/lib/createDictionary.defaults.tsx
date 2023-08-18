export enum DictionaryLanguage {
  ALL_LANGUAGES = 'All Languages',
  ENGLISH = 'English',
  GERMAN = 'German',
  FRENCH = 'French',
  SPANISH = 'Spanish',
  ITALIAN = 'Italian',
  DUTCH = 'Dutch',
}

export const INDICATED_LANGUAGE_OPTIONS = [
  ...Object.keys(DictionaryLanguage).map((key) => ({
    id: DictionaryLanguage[key as keyof typeof DictionaryLanguage],
    label: DictionaryLanguage[key as keyof typeof DictionaryLanguage],
  })),
]
