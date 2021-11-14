import glob


def get_filenames():
    works_dict = {}
    works_dirs = glob.glob("./works/*", recursive=False)
    works_dirs.sort()

    for dir in works_dirs:
        work = dir.split("/")[-1]
        imgs = glob.glob(dir + "/img/*")
        works_dict[work] = imgs

    return works_dict


def write_readme(works_dict):
    path_w = 'README.md'
    with open(path_w, mode='w', newline='\n') as f:
        for work, imgs in works_dict.items():
            # f.write(work + "\n")
            f.write(f'<h2><a href="/works/{work}/README.md">{work}</a></h2>\n')
            for i in imgs:
                f.write(f'<img src="{i}" width="30%">\n')


if __name__ == "__main__":
    works_dict = get_filenames()
    print(works_dict)
    write_readme(works_dict)