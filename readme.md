# homepage

## 定时执行

```bash
crontab -e

#填入
01 4 * * * sudo bash /root/homepage/update.sh >> /root/log/homepageLog.txt

```