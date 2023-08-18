export const InfoBoxDictionaryTerm = (
  <div className='info-box info-box--phrases info-box--s'>
    Please enter the term you want to add/alter here. Only single words are permitted
  </div>
)

export const InfoBoxIndicatedLanguage = (
  <div className='info-box info-box--phrases info-box--m'>
    <p>The language selected will be shown on the Insight Dictionary Manager page.</p>
    <p>
      NOTE: This does not automatically translate the category. It is just a label to help identify
      this category
    </p>
    <p>This box can be left blank if you prefer</p>
  </div>
)

export const InfoBoxDescription = (
  <div className='info-box info-box--phrases info-box--s'>
    Please enter a short description to help you identify this dictionary term. This field can be
    left blank if you would prefer
  </div>
)

export const InfoBoxWeighting = (
  <div className='info-box info-box--phrases info-box--m'>
    <p>
      The word weighting will determine how often the transcription engine will use this word when
      its not sure what the said word was
    </p>
    <p>
      If I set the weighting to '-10' - This word will hardly ever be chosen as the word in the
      transcript
    </p>
    <p>
      If I set the weighting to '-1' - When the transcription engine is very unsure of a word, it
      will use an alternative word to this one
    </p>
    <p>
      If I set the weighting to '1' - it will only correct the transcript to this word when it is
      very unsure of the correct word
    </p>
    <p>
      If I set the weighting to '10', it will correct the transcription to this word even if its
      quite sure the word is something else
    </p>
  </div>
)
