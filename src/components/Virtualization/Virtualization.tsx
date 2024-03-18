import { UIEvent, useMemo, useState } from 'react'
import { observer } from 'mobx-react-lite'

import { Container, List } from './Virtualization.styles'

interface RowProps<T> {
  row: T
}

export interface VirtualizationProps<T> {
  data: T[]
  boxHeight: number
  rowHeight: number
  rowsCount: number
  Row: (props: RowProps<T>) => JSX.Element
  gap?: number
}

export default observer(
  <T extends unknown>({
    data,
    rowsCount,
    boxHeight,
    rowHeight,
    Row,
    gap = 10,
  }: VirtualizationProps<T>) => {
    const [scrolledRows, setScrolledRows] = useState(0)

    // Start with gap
    const start = useMemo(
      () => (scrolledRows - gap < 0 ? 0 : scrolledRows - gap),
      [scrolledRows, gap]
    )

    // End with gap
    const end = useMemo(() => {
      const maxRowsOnScreen = boxHeight / rowHeight

      return maxRowsOnScreen + scrolledRows + gap > rowsCount
        ? rowsCount
        : maxRowsOnScreen + scrolledRows + gap
    }, [scrolledRows, boxHeight, rowHeight, gap, rowsCount])

    const slicedData = useMemo(() => data.slice(start, end), [data, start, end])

    const scrollHandler = (event: UIEvent<HTMLDivElement>) => {
      const currentScrolledRows = Math.round(
        event.currentTarget.scrollTop / rowHeight
      )

      if (
        scrolledRows !== currentScrolledRows &&
        Math.abs(currentScrolledRows - scrolledRows) >= gap
      ) {
        setScrolledRows(currentScrolledRows)
      }
    }

    return (
      <Container
        $boxHeight={boxHeight}
        onScroll={scrollHandler}
      >
        <List
          style={{
            height: `${(rowsCount - start) * rowHeight}px`,
            marginTop: `${start * 50}px`,
            scrollMarginTop: `${scrolledRows * rowHeight}px`,
          }}
        >
          {slicedData.map((item, index) => (
            <Row
              key={`${start + index}`}
              row={item}
            />
          ))}
        </List>
      </Container>
    )
  }
)
