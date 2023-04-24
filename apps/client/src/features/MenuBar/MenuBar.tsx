import { Layout } from '@consta/uikit/Layout';
import { CollapseGroup } from '@consta/uikit/CollapseGroup';

const items = [
  {
    label: 'Пункт раз',
    content: 'Содержимое блока раз',
    rightSide: 'Я справа',
  },
  {
    label: 'Пункт два',
    content: 'Содержимое блока два',
    rightSide: 'Я тоже справа',
  },
  {
    label: 'Пункт три',
    content: 'Содержимое блока три',
    rightSide: 'И я :)',
  },
]


export const MenuBar = () => {
	return(<Layout style={{flex: '0 0 300px', borderRight: "4px solid #E5E5E5" }}>
		<CollapseGroup items={items} />
	</Layout>)
}