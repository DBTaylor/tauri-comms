#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Window;

#[tauri::command]
fn test(window: Window) {
    println!("test");
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![test])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
