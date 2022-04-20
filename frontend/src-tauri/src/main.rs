#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

fn main() {
  println!("hello world!");
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
  println!("done");
}
