import './index.css'

const TabItem = props => {
  const {details, onClickTab, isActive} = props
  const {tabId, displayText} = details
  const activeTabClass = isActive ? 'active-tab-btn' : ''
  const onClickTabItem = () => {
    onClickTab(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeTabClass}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
