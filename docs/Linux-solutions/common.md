# 常见问题
:::tip 说明
本文收集 Linux 一小部分经常问的问题及解决方案。由于摘自个别帖子，不保证解决方案的可行性。
:::


## 在Linux上玩游戏
见 [这个页面](/Linux-solutions/games)

### 操作
#### 安装
deb：应用商店安装，或者终端执行：`sudo apt install <包名>`（如：sudo apt install music）

玲珑：应用商店（目前可能失败）或Jokul自制的玲珑商店安装，或者终端执行：`ll-cli install <玲珑包名>`

#### 卸载
deb：应用商店卸载，启动器右键应用图标卸载，或者终端执行`sudo apt remove <包名>`或 `sudo apt purge <包名>`（如：sudo apt purge music）

注意：卸载自带应用时需谨慎，部分自带应用涉及到系统，卸载后可能会导致系统异常；还有在输入命令时，注意install/remove/purge和包名之间的空格
