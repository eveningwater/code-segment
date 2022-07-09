import { cx, css } from '@emotion/css'
import React,{ useState } from 'react'
import type { ReactNode, SyntheticEvent } from 'react'

const baseStyle = css`
    line-height: 1.5715;
`
const AccordionContainer = cx(baseStyle,css`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #000000d9;
    font-size: 14px;
    background-color: #fafafa;
    border: 1px solid #d9d9d9;
    border-bottom: 0;
    border-radius: 2px;
`)
const AccordionItemContainer = css`
    border-bottom:1px solid #d9d9d9;
`
const AccordionItemHeader = cx(baseStyle,css`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    padding: 12px 16px;
    color: rgba(0,0,0,.85);
    cursor: pointer;
    transition: all .3s,visibility 0s;
    box-sizing: border-box;
`)

const AccordionItemContent = css`
    color: #000000d9;
    background-color: #fff;
    border-top: 1px solid #d9d9d9;
    transition: all .3s ease-in-out;
    padding: 16px;
    &.collapsed {
        display: none;
    }
    &.expanded {
        display: block;
    }
`

interface AccordionItemType {
    index: string | number
    label: string
    isCollapsed: boolean
    handleClick(e:SyntheticEvent):void
    children: ReactNode
}
interface AccordionType {
    defaultIndex: number | string
    onItemClick(key: number | string): void
    children: JSX.Element []
}

const AccordionItem = (props: Partial<AccordionItemType>) => {
    const { label,isCollapsed,handleClick,children } = props
    return (
        <div className={AccordionItemContainer} onClick={handleClick}>
            <div className={AccordionItemHeader}>
                { label }
            </div>
            <div aria-expanded={isCollapsed} className={`${AccordionItemContent}${ isCollapsed ? ' collapsed' : ' expanded' }`}>
                { children }
            </div>
        </div>
    )
}

const Accordion = (props: Partial<AccordionType>) => {
    const { defaultIndex,onItemClick,children } = props
    const [bindIndex, setBindIndex] = useState(defaultIndex)
    const changeItem = (index: number | string) => {
        if(typeof onItemClick === 'function'){
            onItemClick(index)
        }
        if(index !== bindIndex){
            setBindIndex(index)
        }
    }
    const items = children?.filter(item => item?.type?.name === 'AccordionItem')
    return (
        <div className={AccordionContainer}>
            {
                items?.map(({ props: { index,label,children } }) => (
                    <AccordionItem 
                        key={index} 
                        label={label} 
                        children={children}
                        isCollapsed={bindIndex !== index }
                        handleClick={ () => changeItem(index) }
                    />
                ))
            }
        </div>
    )
}

const Demo = () => {
    return (
        <Accordion defaultIndex="1" onItemClick={console.log}>
            <AccordionItem label="A" index="1">
              Lorem ipsum
            </AccordionItem>
            <AccordionItem label="B" index="2">
              Dolor sit amet
            </AccordionItem>
        </Accordion>
    )
}

export default Demo