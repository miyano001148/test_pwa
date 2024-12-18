# test_pwa

## 概要
* PWA検証用アプリ
* 主な機能は下記
  * GoogleMap
  * カメラ
  * push通知(現状制限あり)
  * TODO: オフライン操作

* 現在github pagesにて[公開中](https://miyano001148.github.io/test_pwa/)

## 開発環境
* node(22.12.0)
* react(18.3.1)
* TypeScript(4.9.5)
* Firebase(Push通知機能に使用)
* GoogleMapAPI(地図機能に使用)
* GithubPages(アプリを公開する際に使用)

## 環境構築手順

最低限の開発環境の構築手順を記載

1. [node](https://nodejs.org/dist/)をダウンロードし、解凍したディレクトリを任意の場所に配置する。
2.  環境変数のPathを設定する。(設定方法がわからない場合は[こちら](https://win11lab.info/win11-environment-variable/))
3.  PCを再起動する
4.  コマンドプロンプトで`$node -v`を実行し、バージョンが表示されればnodeの導入は完了。
5.  コマンドプロンプトで`C:\Users\{ユーザー名}\{リポジトリの配置場所}\test_pwa`へ移動し`$npm install`を行う。
6. `$npm start`でlocalhostが立ち上がるのでブラウザで開く(localhost:3000)

