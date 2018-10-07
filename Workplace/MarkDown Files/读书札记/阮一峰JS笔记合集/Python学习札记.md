# Python 学习札记

## 基础

在 Python 中使用变量时，需要遵守一些规则和指南。违反这些规则将引发错误，而指南旨在让你编写的代码更容易阅读和理解。请务必牢记下述有关变量的规则。

> 1, 变量名只能包含字母、数字和下划线。变量名可以字母或下划线打头，但不能以数字打头，例如，可将变量命名为 message_1 ，但不能将其命名为 1_message 。
> 2, 变量名不能包含空格，但可使用下划线来分隔其中的单词。例如，变量名 greeting_message 可行，但变量名 greeting message 会引发错误。
> 3, 不要将 Python 关键字和函数名用作变量名，即不要使用 Python 保留用于特殊用途的单词，如 print （请参见附录 A.4 ）。
> 4, 变量名应既简短又具有描述性。例如， name 比 n 好， student_name 比 s_n 好， name_length 比 length_of_persons_name 好。
> 慎用小写字母 l 和大写字母 O ，因为它们可能被人错看成数字 1 和 0 。

就目前而言，应使用小写的 Python 变量名。在变量名中使用大写字母虽然不会导致错误，但避免使用大写字母是个不错的主意

### 字符串

#### 常用字符串函数

```python

// 1，大小写转换函数

name = 'tao xiao lin'
print(name.title()) //Tao Xiao Lin

//全部大写/小写
print(name.upper())
print(name.lower())

//存储数据时，方法 lower() 很有用。很多时候，你无法依靠用户来提供正确的大小写，因此需要将字符串先转换为小写，再存储它们。以后需要显示这些信息时，再将其转换为
最合适的大小写方式。

// 2， 合并函数，

first_name = "ada"
last_name = "lovelace"
full_name = first_name + " " + last_name
print("Hello, " + full_name.title() + "!") // Hello, Ada Lovelace!
// 使用变量存储起来，使print语句变得简单
message = "Hello, " + full_name.title() + "!"
print(message)
```

// 在编程中， 空白 泛指任何非打印字符，如空格、制表符和换行符。你可使用空白来组织输出，以使其更易读。要在字符串中添加制表符，可使用字符组合 `\t` ,要在字符串中添加换行符，可使用字符组合 `\n`

##### 删除空白

在程序中，额外的空白可能令人迷惑。对程序员来说， 'python' 和 'python ' 看起来几乎没什么两样，但对程序来说，它们却是两个不同的字符串。 Python 能够发
现 'python ' 中额外的空白，并认为它是有意义的 —— 除非你告诉它不是这样的。

空白很重要，因为你经常需要比较两个字符串是否相同。例如，一个重要的示例是，在用户登录网站时检查其用户名。但在一些简单得多的情形下，额外的空格也可能令人迷
惑。

Python 能够找出字符串开头和末尾多余的空白。要确保字符串末尾没有空白，可使用方法： 去掉右边的空白rstrip()，去掉左边的空白lstrip()   去掉两边的空白strip() 。

```python
favorite_language = 'python '
favorite_language
'python '
favorite_language.rstrip() // 这种删除只是暂时
'python'
favorite_language
'python '

// 要永久删除这个字符串中的空白，必须将删除操作的结果存回到变量中
favorite_language = favorite_language.rstrip()
```