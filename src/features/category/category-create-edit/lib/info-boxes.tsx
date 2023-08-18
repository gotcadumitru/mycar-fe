export const InfoBoxCategoryName = (
  <div className='info-box info-box--phrases'>
    <p>
      Enter the category name exactly as you want it to appear (spaces and special characters are
      allowed)
    </p>
    <p>Please take care to provide a unique category name</p>
  </div>
)

export const InfoBoxLanguage = (
  <div className='info-box info-box--phrases'>
    <p>The language selected will be shown on the Insight Category Manager page</p>
    <p>
      NOTE: This does not automatically translate the category. It is just a label to help identify
      this category
    </p>
  </div>
)

export const InfoBoxDescription = (
  <div className='info-box info-box--phrases info-box--m'>
    <p>
      Please enter a short description to help you identify this category. This field can be left
      blank if you would prefer
    </p>
  </div>
)

export const InfoBoxWordsOrPhrases = (
  <div className='info-box info-box--phrases'>
    <p>
      Please enter the lists of words and phrases you want this category to look for. A simple comma
      separated list of words and phrases will allow you to search for those terms in your call and
      if any of those terms are found. The call will be flagged. Natterbox Insight has much more
      powerful syntax to refine your searching
    </p>
    <p>Please check the user guide for more info on how to craft more complex searches</p>
  </div>
)

export const InfoBoxWhoToSay = (
  <div className='info-box info-box--phrases info-box--m'>
    <p>Choose which party needs to say the word(s) or phrase(s) to activate this rule</p>
  </div>
)

export const InfoBoxWhenShouldHappen = (
  <div className='info-box info-box--phrases'>
    <p>
      Choose During entire call if you want the search to take place across the entire length of the
      call. eg for dog and cat at any point during the call to activate the category
    </p>
    <p>
      Choose Beginning of the call for the search to take place during a defined time frame at the
      beginning of the call
    </p>
    <p>
      Choose End of the call for the search to take place during a defined time frame at the end of
      the call
    </p>
  </div>
)

export const InfoBoxWhereToHappen = (
  <div className='info-box info-box--phrases'>
    <p>
      When you select 'Across multiple speaker turns', the search will match keywords spoken across
      different participants' turns
    </p>
    <p>
      If you select 'Within a single speaker turn', the search will match keywords spoken within a
      single participant's turn in a conversation
    </p>
  </div>
)

export const InfoBoxWhichUser = (
  <div className='info-box info-box--phrases'>
    <p>
      Please select the users that you would like to add to this category. Please note that only
      users with an Insight licence will be shown in this table
    </p>
  </div>
)

export const InfoBoxWhichGroup = (
  <div className='info-box info-box--phrases'>
    <p>
      Please select the groups that you would like to add to this category. For any groups that you
      add, all users within that group that have an Insight licence will have their calls subject to
      this category. Click on the name of the group to see the users that are in it
    </p>
  </div>
)

export const InfoBoxMinutesSeconds = (
  <div className='info-box info-box--phrases'>Minutes and seconds</div>
)
