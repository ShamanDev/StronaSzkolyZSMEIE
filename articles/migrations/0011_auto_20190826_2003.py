# Generated by Django 2.1.5 on 2019-08-26 18:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0010_auto_20190826_2001'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='file1',
            field=models.FileField(blank=True, null=True, upload_to='articles/'),
        ),
        migrations.AlterField(
            model_name='article',
            name='file2',
            field=models.FileField(blank=True, null=True, upload_to='articles/'),
        ),
        migrations.AlterField(
            model_name='article',
            name='file3',
            field=models.FileField(blank=True, null=True, upload_to='articles/'),
        ),
        migrations.AlterField(
            model_name='article',
            name='file4',
            field=models.FileField(blank=True, null=True, upload_to='articles/'),
        ),
        migrations.AlterField(
            model_name='article',
            name='file5',
            field=models.FileField(blank=True, null=True, upload_to='articles/'),
        ),
    ]
