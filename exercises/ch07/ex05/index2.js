function displayUsers(users) {
  const sorted = users.sort((a, b) => a.name.localeCompare(b.name));
  for (const u of sorted) {
    console.log(`${u.name}`);
  }
}

const users = [{ name: "hoge" }, { name: "fuga" }, { name: "piyo" }];
displayUsers(users);

// 注意: 以下の行は hoge ではなく fuga を表示する！
// (displayUsers 内の sort で引数の users が変更されるため)
console.log(users[0].name);
console.log(users[1].name);
