Content of CMakeLists.txt:




cmake_minimum_required(VERSION 3.0)
project(alpha)

set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 17)

set(GTK3_INCLUDE_DIRS "C:/msys64/mingw64/include/")
set(GTK3_LIBRARY_DIRS "C:/msys64/mingw64/lib")
set(ENV{PKG_CONFIG_PATH} "C:/msys64/mingw64/lib/pkgconfig")

find_package(PkgConfig REQUIRED)
pkg_check_modules(GTK4 REQUIRED gtk4)

include_directories(${GTK4_INCLUDE_DIRS})
link_directories(${GTK4_LIBRARY_DIRS})
add_definitions(${GTK4_CFLAGS_OTHER})

add_executable(TutorialApp main.c)
set_target_properties(TutorialApp PROPERTIES WIN32_EXECUTABLE true)  # If you dont want console to run with your .exe
target_link_libraries(TutorialApp ${GTK4_LIBRARIES})






commands by me  just try don't try: 
pacman -Syu
pacman -S pkgconf

  pacman -S mingw-w64-x86_64-gtk3 mingw-w64-x86_64-toolchain
pkg-config --cflags --libs gtk+-3.0


tasks.json

{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "build GTK program",
      "type": "shell",
      "command": "gcc",
      "args": [
        "-o",
        "main",           // output executable name
        "main.c",         // source file
        "`pkg-config",    // begin pkg-config command
        "--cflags",       // include compiler flags
        "--libs",         // include linker flags
        "gtk+-3.0`"       // GTK library
      ],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "problemMatcher": ["$gcc"],
      "detail": "Generated task to build GTK program"
    }
  ]
}
























othehr one:
// main.c
#include <gtk/gtk.h>

int main(int argc, char *argv[]) {
    gtk_init(&argc, &argv);

    GtkWidget *window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
    gtk_window_set_title(GTK_WINDOW(window), "Hello, World!");
    gtk_window_set_default_size(GTK_WINDOW(window), 200, 100);

    GtkWidget *label = gtk_label_new("Hello, World!");
    gtk_container_add(GTK_CONTAINER(window), label);

    g_signal_connect(window, "destroy", G_CALLBACK(gtk_main_quit), NULL);

    gtk_widget_show_all(window);
    gtk_main();

    return 0;
}








tasks.json
// tasks.json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "build GTK program",
            "type": "shell",
            "command": "gcc",
            "args": [
                "main.c",
                "`pkg-config --cflags --libs gtk+-3.0`",
                "-o",
                "hello_world_app"
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "problemMatcher": ["$gcc"],
            "detail": "Compiles the GTK application"
        }
    ]
}







run 
ctrl + shft + b


./hello_world_app

