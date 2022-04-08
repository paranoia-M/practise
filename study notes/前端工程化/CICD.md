<!--
 * @Author: your name
 * @Date: 2022-04-06 10:52:50
 * @LastEditTime: 2022-04-08 10:07:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Front-end development learning\document\notes\study notes\前端工程化\CICD.md
-->

# github actions

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. 您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。

还可以将 github action 工作流程配置为在存储库中发生事件时触发，例如 打开拉去请求或创建议题，工作流程包含一个或多个作业，这些作业可以按照顺序执行，也可以并行进行，每个作业都将在其自己的虚拟机运行器中运行，或者在容器内运行，并且具有一个或多个步骤，这些步骤要么运行你定义的脚本，要么运行操作，这是一个可重用的扩展，可以简化你的工作流程

- 工作流程

是一个可配置的自动化处理过程，它将运行一个或多个作业，他由签入到存储库的 YAML 文件定义，并在存储库中的事件触发时运行，也可以手动触发，或按定义的时间表触发，

- 事件

事件是存储库中触发工作流程运行的特定活动，

- Jobs

作业是工作流程中的一组步骤，他们在同一运行器上执行，每个步骤要么是将要执行的 shell 脚本，要么是将运行的操做。步骤按顺序执行，并且相互依赖，

- 操作

操作是 github action 平台的自定义应用程序，用于执行复杂但经常重复的任务，

- 运行器

每个运行器一次可以运行一个作业，

- name: learn-github-actions
  可选 - 将出现在 GitHub 仓库的 Actions（操作）选项卡中的工作流程名称。
- on: [push]
  指定此工作流程的触发器
- jobs:
  将 learn-github-actions 工作流程中运行的所有作业组合在一起。表示要执行的一项或多项任务
  needs: 指定当前任务的依赖关系，即执行顺序
  runs-on:指定运行所需要的虚拟机环境，
  steps:将 check-bats-version 作业中运行的所有步骤组合在一起。 此部分下嵌套的每项都是一个单独的操作或 shell 脚本。
  check-bats-version:定义名为 check-bats-version 的作业。 子键将定义作业的属性。

# docker

- 镜像:Image
  相当于 root 文件系统
- 容器:Container
  镜像和容器的关系就像是面向对象的类和实例，容器可以被创建、启动、停止、删除、暂停等，容器的实质是进程，
- 仓库:Repository
  一个集中的存储，分发镜像的服务

# git Action 部署记录

使用 github Action + github Pages 将自己的项目部署到 github 的服务器上

首先得获取 github 的 token，在 setting 中生成一个 token，然后将 token 配置到仓库的 secret 里面，之后可以在 action 里面生成一个 yaml 文件，配置里面的文件。

配置完成后先打一次包，然后推送到远端，之后配置仓库的 gitPages，然后就可以访问了。

注意: vue 项目打包后会有路径错误，因此应该在 vite.config.js 或 vue.config.js 里面进行配置，让输出的路径名换为相对路径。
