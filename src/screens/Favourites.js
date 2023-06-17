import * as React from 'react'
import {Link} from 'components/lib'
import {ListItemList} from 'components/list-item-list'

function NewReadingListScreen() {
  return (
    <ListItemList
      filterListItems={li => !li.finishDate}
      noListItems={
        <p>
          Hey there! Welcome to your bookshelf reading list. Get started by
          heading over to <Link to="/discover">the Discover page</Link> to add
          books to your list.
        </p>
      }
      noFilteredListItems={
        <p>
          Seems like you need to go through {' '}
          
          <Link to="/discover">discover more</Link>.
        </p>
      }
    />
  )
}

export {NewReadingListScreen}
